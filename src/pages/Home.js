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
				border={"#263F90"}
			/>
			<ProjectGridItem 
				id={"4"}
				companyTitle={"Sandbox"}
				serviceOne={"Hover Effects"}
				serviceTwo={"Code Snippets"}
				image={"sandbox.svg"}
				border={"#9686F5"}
			/>
			<ProjectGridItem 
				id={"5"}
				companyTitle={"Targetbase"}
				serviceOne={"Web Design"}
				serviceTwo={"Front-End Dev"}
				image={"targetbase-hero.jpg"}
				border={"#febe11"}
			/>
		</div>
	);
}

export default Home;