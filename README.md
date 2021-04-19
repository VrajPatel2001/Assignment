![Movies](https://user-images.githubusercontent.com/80224413/115180867-9c29d500-a0a4-11eb-98cc-93b8a9a37782.png)

#V-TV
This Project is simple movie listing website created with Node.js, Mongodb, Express and handlebars. 

##Table Of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project lists movies and performs CURD operations for administrator. It also uses sendgrid API to send emails. 
It mainly focus on backend technology.  
	
## Technologies
Project is created with:
* Node.js: "v15.11.0"
* @handlebars/allow-prototype-access: "^1.0.3",
* @sendgrid/mail: "^7.4.2",
* bcryptjs: "^2.4.3",
* dotenv: "^8.2.0",
* express: "^4.17.1",
* express-fileupload: "^1.2.1",
* express-handlebars: "^5.2.0",
* express-session: "^1.17.1",
* lightslider: "^1.1.6",
* mongoose: "^5.12.1"

	
## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm run dev
```

##Use
This website create cart and when user conforms the order it sends email of the order detail. 
