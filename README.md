# GiphyCon

MovieApp is a simple and iteractive application that uses [Giphy Api](https://developers.giphy.com/) and render trending gifs and stickers.
Also an user can use the search endpoint to get the desired gifs and stickers.


## Prerequisites

[Node js](https://nodejs.org/en/download/) and [git bash](https://git-scm.com/downloads) should be installed in your system.

## Installation

First fork and clone the repo to get your own version of the application in the local system or you can download the zip file and proceed further.

```
git clone https://github.com/satcasm/GiphyCon.git 
```

Use the package manager [npm](https://www.npmjs.com/) to install all the dependencies used in the application.

```
npm install 
```

## Usage

Remember to generate a valid api key from [Giphy Api](https://developers.giphy.com/) and replacing them in script tags in **search.ejs** and **trending.ejs** files.
If you fail to do that an 403 error will be encountered.

Once all the dependencies are installed and you have put *api_key* in required files, use this command and open your browser at http://localhost:3000/ to use the app.

```
node app.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
