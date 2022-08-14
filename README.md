# News app that fetches news contents from various sources as gathered by Inshorts app.

Link: https://newsinshort.netlify.app/

![Screenshot 2022-08-14 093556](https://user-images.githubusercontent.com/92965519/184522056-0c9d06b5-d484-43f2-bf85-76dcc34c6e32.png)

API: https://github.com/cyberboysumanjay/Inshorts-News-API
## Usage

Make a get request specifying the category of news you want

```
https://inshorts.deta.dev/news?category={category_name}
```

Example - https://inshorts.deta.dev/news?category=science

---

## Response Format

The response JSON Object looks something like this -

```JSON
{
  "category": "technology",
  "data": [
    {
      "author": "Pragya Swastik",
      "content": "American actor Aaron Paul, who portrayed Jesse Pinkman in 'Breaking Bad', revealed that he uses a 'credit card-sized dumb phone' that cannot store any apps and can only make calls and send texts. \"There's no camera or emailing,\" Paul said, adding that he's planning to buy a flip phone. \"I haven't owned a computer in over 10 years,\" he added.",
      "date": "15 Mar 2020,Sunday",
      "imageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/03_mar/15_sun/img_1584273701082_423.jpg",
      "readMoreUrl": "https://www.dailymail.co.uk/tvshowbiz/article-8111761/Breaking-Bad-star-Aaron-Paul-reveals-owned-computer-decade-prefers-FLIP-PHONE.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
      "time": "06:17 pm",
      "title": "\nI use a 'dumb phone' that only makes calls & sends texts: 'Breaking Bad' actor\n",
      "url": "https://www.inshorts.com/en/news/i-use-a-dumb-phone-that-only-makes-calls-sends-texts-breaking-bad-actor-1584276455594"
    },
    {
      "author": "Pragya Swastik",
      "content": "Google recently shared five basic protective measures against coronavirus that can be followed by people worldwide. These include washing hands often, coughing into the elbow, not touching the face, staying over three feet apart from others and staying at home on feeling sick. Google engineers are also building a website to screen potential coronavirus patients in the US.",
      "date": "16 Mar 2020,Monday",
      "imageUrl": "https://static.getinpix.com/public/images/v1/variants/jpg/m/2020/03_mar/15_sun/img_1584292734587_739.jpg",
      "readMoreUrl": "https://twitter.com/Google/status/1238893403821113344?s=20&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
      "time": "07:00 am",
      "title": "\nGoogle shares 5 basic protective measures against coronavirus\n",
      "url": "https://www.inshorts.com/en/news/google-shares-5-basic-protective-measures-against-coronavirus-1584322241969"
    }
    ],
  "success": true
}
```

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
