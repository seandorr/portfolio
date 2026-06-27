import { useState, useRef } from "react";
import { RecipeCard } from "../../components/RecipeCard";
import { activeDay } from "../../utils/functions/getDay";
import styles from "./week.module.scss";
import { recipes, initialWeekDays } from "../../utils/constants/recipes";
import type {
  DayDataProps,
  DaysProps,
  WeekDayColumnProps,
  WeekMealProps,
} from "../../utils/types";

const WeekDayColumn = ({
  dayKey,
  title,
  meals,
  active,
  addMeal,
  removeMeal,
  reorderMeal,
  duplicateMeal,
  moveMealToDay,
  draggedItem,
  setDraggedItem,
  toggleMoreOptionsMenu,
  openMenuRecipe,
}: WeekDayColumnProps) => {
  return (
    <div
      className={`${styles.weekDayContainer} ${active ? styles.active : ""}`}
    >
      <div className={styles.weekDayTitleContainer}>
        <h2 className={styles.weekDayTitle}>{title}</h2>
        {active && (
          <span className={styles.activeDayTag}>
            <div className={styles.activeSymbol}></div>Hoy
          </span>
        )}
      </div>
      <div
        className={styles.recipesContainer}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          if (draggedItem && draggedItem.dayKey !== dayKey) {
            moveMealToDay(draggedItem.dayKey, draggedItem.index, dayKey);
            setDraggedItem(null);
          }
        }}
      >
        <button
          className={styles.addMealButton}
          onClick={() => addMeal({ dayKey })}
        >
          +
        </button>
        {meals.map((meal, index) => {
          const recipe = recipes.find((item) => item.id === meal.recipeId);
          const title = meal.title ?? recipe?.title ?? "Receta";
          const mealType = recipe?.mealType ?? "Desayuno";
          const tags = recipe?.tags ?? [];
          const isDragged =
            draggedItem?.dayKey === dayKey && draggedItem?.index === index;
          const isMenuOpen =
            openMenuRecipe?.dayKey === dayKey &&
            openMenuRecipe?.index === index;

          return (
            <div
              className={styles.draggableRecipeCard}
              key={`${meal.recipeId}-${index}`}
              draggable
              onDragStart={() => setDraggedItem({ dayKey, index })}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (draggedItem) {
                  // Same day reordering
                  if (
                    draggedItem.dayKey === dayKey &&
                    draggedItem.index !== index
                  ) {
                    reorderMeal(dayKey, draggedItem.index, index);
                  }
                  // Cross-day move
                  else if (draggedItem.dayKey !== dayKey) {
                    moveMealToDay(
                      draggedItem.dayKey,
                      draggedItem.index,
                      dayKey,
                    );
                  }
                  setDraggedItem(null);
                }
              }}
              onDragEnd={() => setDraggedItem(null)}
              style={{
                opacity: isDragged ? 0.5 : 1,
                cursor: isDragged ? "grabbing" : "grab",
              }}
            >
              <RecipeCard
                className={styles.recipeCard}
                title={title}
                tags={tags}
                type="calendar"
                mealType={mealType}
                handleOnDeleteRecipeItem={() => removeMeal(dayKey, index)}
                handleOnDuplicateRecipeItem={() => duplicateMeal(dayKey, index)}
                handleOnMoreOptionsButton={() =>
                  toggleMoreOptionsMenu(dayKey, index)
                }
                showMoreOptionsMenu={isMenuOpen}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Week = () => {
  const [weekData, setWeekData] = useState<DayDataProps[]>(initialWeekDays);
  const [draggedItem, setDraggedItem] = useState<{
    dayKey: DaysProps;
    index: number;
  } | null>(null);
  const [openMenuRecipe, setOpenMenuRecipe] = useState<{
    dayKey: DaysProps;
    index: number;
  } | null>(null);
  const weekContainerRef = useRef<HTMLDivElement>(null);

  const addMeal = ({ dayKey }: { dayKey: DaysProps }) => {
    const defaultRecipeId = recipes[0]?.id ?? "1";
    const newMeal: WeekMealProps = {
      recipeId: defaultRecipeId,
      title: "Nueva receta",
      mealType: "Desayuno",
    };

    setWeekData((prev) => {
      return prev.map((day) =>
        day.dayKey === dayKey
          ? {
              ...day,
              meals: [...day.meals, newMeal],
            }
          : day,
      );
    });
  };

  const removeMeal = (dayKey: DaysProps, index: number) => {
    setWeekData((prev) => {
      return prev.map((day) =>
        day.dayKey === dayKey
          ? {
              ...day,
              meals: day.meals.filter((_, mealIndex) => mealIndex !== index),
            }
          : day,
      );
    });
    setOpenMenuRecipe(null);
  };

  const reorderMeal = (
    dayKey: DaysProps,
    fromIndex: number,
    toIndex: number,
  ) => {
    setWeekData((prev) => {
      return prev.map((day) => {
        if (day.dayKey !== dayKey) return day;
        const newMeals = [...day.meals];
        const [movedMeal] = newMeals.splice(fromIndex, 1);
        newMeals.splice(toIndex, 0, movedMeal);
        return { ...day, meals: newMeals };
      });
    });
    setOpenMenuRecipe(null);
  };

  const duplicateMeal = (dayKey: DaysProps, index: number) => {
    setWeekData((prev) => {
      return prev.map((day) => {
        if (day.dayKey !== dayKey) return day;
        const mealToDuplicate = day.meals[index];
        const newMeals = [...day.meals];
        newMeals.splice(index + 1, 0, { ...mealToDuplicate });
        return { ...day, meals: newMeals };
      });
    });
    setOpenMenuRecipe(null);
  };

  const moveMealToDay = (
    fromDayKey: DaysProps,
    fromIndex: number,
    toDayKey: DaysProps,
  ) => {
    setWeekData((prev) => {
      const sourceDay = prev.find((day) => day.dayKey === fromDayKey);
      const mealToMove = sourceDay?.meals[fromIndex];

      if (!mealToMove) {
        return prev;
      }

      return prev.map((day) => {
        if (day.dayKey === fromDayKey) {
          return {
            ...day,
            meals: day.meals.filter((_, index) => index !== fromIndex),
          };
        }

        if (day.dayKey === toDayKey) {
          return {
            ...day,
            meals: [...day.meals, mealToMove],
          };
        }

        return day;
      });
    });
    setOpenMenuRecipe(null);
  };

  const toggleMoreOptionsMenu = (dayKey: DaysProps, index: number) => {
    setOpenMenuRecipe((prev) => {
      // If clicking the same recipe, close the menu
      if (prev?.dayKey === dayKey && prev?.index === index) {
        return null;
      }
      // Otherwise, open the menu for this recipe
      return { dayKey, index };
    });
  };

  return (
    <div
      className={styles.weekContainer}
      ref={weekContainerRef}
      onClick={() => setOpenMenuRecipe(null)}
    >
      {weekData.map((weekDay: DayDataProps, index) => {
        const { dayKey, title, meals } = weekDay;
        return (
          <WeekDayColumn
            key={index}
            dayKey={dayKey}
            title={title}
            meals={meals}
            active={activeDay === dayKey}
            addMeal={addMeal}
            removeMeal={removeMeal}
            reorderMeal={reorderMeal}
            duplicateMeal={duplicateMeal}
            moveMealToDay={moveMealToDay}
            draggedItem={draggedItem}
            setDraggedItem={setDraggedItem}
            toggleMoreOptionsMenu={toggleMoreOptionsMenu}
            openMenuRecipe={openMenuRecipe}
          />
        );
      })}
    </div>
  );
};

export default Week;
