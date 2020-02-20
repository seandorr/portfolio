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
				image={"gemini-hero.jpg"}
				border={"#0FA5A1"}
			/>
			<ProjectGridItem 
				id={"2"}
				companyTitle={"Los Dos Creative"}
				serviceOne={"Logo Design"}
				serviceTwo={"Branding"}
				image={"losdos-logo.svg"}
				border={"#ffbbbb"}
			/>
			<ProjectGridItem 
				id={"3"}
				companyTitle={"Choibap"}
				serviceOne={"Menu Design"}
				serviceTwo={"Custom Illustrations"}
				image={"choibap-illustration.svg"}
				border={"#F9EA7D"}
			/>
			<ProjectGridItem 
				id={"4"}
				companyTitle={"codeBase"}
				serviceOne={"WIP"}
				serviceTwo={""}
				image={""}
				border={"#9686F5"}
			/>
			<ProjectGridItem 
				id={"5"}
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