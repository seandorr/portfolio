import React from 'react';
import ProjectGridItem from './ProjectGridItem';

const Home = () => {
	return (
		<div className="grid-container">
			<ProjectGridItem 
				id={"1"}
				companyTitle={"Gemini Diversified Services"}
				serviceOne={"Logo & Branding"}
				serviceTwo={"Web Design & Dev"}
				image={"/images/gemini-hero.jpg"}
				border={"#0FA5A1"}
			/>
			<ProjectGridItem 
				id={"2"}
				companyTitle={"Eye Medical Clinic"}
				serviceOne={"Web Design"}
				serviceTwo={"Iconography"}
				image={""}
				border={"#F08E21"}
			/>
			<ProjectGridItem 
				id={"3"}
				companyTitle={"codeBase"}
				serviceOne={"WIP"}
				serviceTwo={""}
				image={""}
				border={"#9686F5"}
			/>
			<ProjectGridItem 
				id={"4"}
				companyTitle={"Los Dos Creative"}
				serviceOne={"Logo Design"}
				serviceTwo={"Branding"}
				image={""}
				border={"#ffbbbb"}
			/>
			<ProjectGridItem 
				id={"5"}
				companyTitle={"Targetbase"}
				serviceOne={"Web Design"}
				serviceTwo={"Front-End Dev"}
				image={""}
				border={"#febe11"}
			/>
			<ProjectGridItem 
				id={"6"}
				companyTitle={"Miller Public Relations"}
				serviceOne={"Social Posts"}
				serviceTwo={"Custom Illustrations"}
				image={""}
				border={"#E63D87"}
			/>
		</div>
	);
}

export default Home;