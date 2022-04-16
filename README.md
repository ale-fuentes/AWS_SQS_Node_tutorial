
## Amazon SQS with Node

![](https://img.shields.io/badge/OS-Windows-informational?style=flat&logo=windows&logoColor=white&color=0078D6)
![](https://img.shields.io/badge/IDE-Visual_Studio_Code-informational?style=flat&logo=visual-studio-code&logoColor=white&color=007ACC)


![](https://img.shields.io/badge/Cloud-Amazon_AWS-informational?style=flat&logo=AmazonAWS&logoColor=white&color=232F3E)
![](https://img.shields.io/badge/Language-Node.Js-informational?style=flat&logo=Node.js&logoColor=white&color=339933)

![](https://img.shields.io/badge/Author-Alejandro_Fuentes_|_fuentesra@hotmail.com-informational?style=flat&logoColor=white&color=4a4c4d)

## Starting

some tips for use this code

1. **Create an acount in AWS**, you can create one [free acount AWS](https://aws.amazon.com/free/).
2. **Create a credential** for we can call services AWS, [see here how to](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html).
3. **Create a SQS** in our AWS, one SQS of type *fifo*, [here has a tutorial](https://console.aws.amazon.com/sqs/).
4. **Install Node.js** from [our site](https://nodejs.org/en/).
5. **Install git** for clone this project, here you can [download and install](https://git-scm.com/downloads).
6. **Clone project**, in some folder, for it using next command:

```
git clone https://github.com/ale-fuentes/AWS_SQS_Node_tutorial.git
```

7. **create in root project `.env` file**, this is importand for configuration our project, to continue write next codign with your configurations:

```
# AWS
AWS_ACCESS_KEY_ID=<YOUR ACCESS KEY>
AWS_SECRET_ACCESS_KEY=<YOUR ACCESS SECRET>
AWS_REGION=<YOUR REGION>
AWS_QUEUE_URL=<YOUT URL QUEUE>
AWS_MESSAGE_GROUP=<YOUR GROUP>
AWS_API_VERSION=<YOUR VERSION>

# EMAIL
EMAIL_SERVICE=gmail
EMAIL_AUTH_USER=<YOUR TEST EMAIL GMAIL>
EMAIL_AUTH_PASS=<YOUR PASSWORD EMAIL>
SENDER_EMAIL_ADDRESS=<YOUR EMAIL TO SENDER>
```
8. **preparing project for your execution** after all before steps are completed, with next command:

```
$ npm i 
```

9. **execute project**, with next command:

```
$ npm start
```

10. **Testing using Postman**, we may need to install it, them here you can [download and install](https://www.postman.com/downloads/). Fort testing you need use url al port indicate in pacakge.json:

```
type requisition: GET
url to reuqisiton: http://localhost:8081/index
```

> **NOTE** <br/>
> if por 80 are busy, using next command for listing all service in port 8081:
> 
> ```
> netstat -ano | findstr LISTENING | findstr 8081
> ```
> 
> if are listing, get `PID` and finish it with next command:
> 
> ```
> taskkill -PID <number> -F
> ```
>
> _


and, how paramts in the body:

```
Type paramt: Body
Format paramt: JSON
Paramt example:

{
    "userEmail": "rrrfafafa@gmail.com",
    "itemName": "eraser",
    "itemPrice": "1.55",
    "itemsQuantity": "2"
}
```
