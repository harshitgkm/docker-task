	const express = require("express");

	const app = express();

	const port = process.env.PORT ||  3000;


	app.get("/", (req,res)=>{
		res.send("Testing home page!");
	})

	app.get("/health", (req,res)=>{
		res.send("Health test successful!");
	})

	app.listen(port, ()=> {
		console.log(`Listenning to port no. ${port}`);

	})