# Getting Started with Create React App

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

## Affiliate CMS

The app includes a simple admin area to manage affiliate products. Use the **Admin ▾** dropdown in the navigation bar and choose **Affiliate CMS** (path `/admin/affiliates`) to add new products with a name, image, description, and link. These entries are saved in your browser's localStorage and displayed on the Affiliates page.

## Aesthetic Updates

Roboto fonts and a subtle background gradient provide a cleaner look. The Affiliates grid features hover effects and improved spacing for better readability.

## Development Notes

Run `npm install` after cloning to ensure all dependencies are present before starting or testing the application. If you see an error like `react-scripts: not found` when running tests, it usually means dependencies haven't been installed yet.

This project is **frontend only**. The Affiliate CMS stores data in the browser's
localStorage, so no server or backend setup is required.

The `docs/affiliates_cms.patch` file contains the full diff introducing the Affiliate CMS and aesthetic improvements, while `docs/wireframe.md` provides a high-level diagram of the current layout.
See `docs/patch_summary.md` for a table describing each stored patch.

## Managing Blog Posts

Blog articles live in `src/pages/Blog.js` as an array of post objects. Each post
includes an `id`, `title`, `summary`, and `fullContent` field. Simply edit this
file and add a new object to the array to publish a new article. Reload the
development server to see your changes.


Open the **Blog CMS** from the **Admin ▾** dropdown (path `/admin/blog`) to add new posts directly in the browser.
Fill out the form with a title, summary, and full content. Posts are stored in
`localStorage` and appear on the Blog page automatically. You can still edit
`src/pages/Blog.js` to change the default posts shipped with the project. You'll be prompted for the admin password when visiting this page.

## Managing Affiliate Products

Use the **Admin ▾** dropdown (path `/admin/affiliates`) to open the Affiliate CMS.
Fill out the form to add a product name, image URL, description, and purchase link.
Items are saved in your browser's `localStorage` and will appear on the Affiliates page.
You can remove an entry by clicking its **Delete** button or by clearing browser storage.
Both admin pages are password protected with the password `7vY3p$92q`.

## Available Patch Files

The `docs` folder contains patch files that apply various updates to this project.
See [`docs/patch_summary.md`](docs/patch_summary.md) for details on each patch.

- `blog_cms.patch` – adds the blog management CMS.
- `affiliates_cms.patch` – introduces the affiliate product manager.
- `bmi_tool.patch` – installs the BMI calculator tool.
- `aesthetic_update.patch` – applies general styling improvements.
- `theme_update.patch` – updates fonts and colors for the site theme.
- `admin_dropdown.patch` – provides a dropdown for admin controls.
- `full_update.patch` – applies all of the above changes at once.

Apply `full_update.patch` if you want every feature in one go, or choose
individual patches to update selectively.
