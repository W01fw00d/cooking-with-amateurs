cd ../
echo "Building chemistry-ui"
cd ../chemistry-ui
npm run build
echo "Linking react..."
cd ../chemistry-ui/node_modules/react
npm link
cd ../../../cooking-with-amateurs
npm link react
echo "Linking react-router-dom..."
cd ../chemistry-ui/node_modules/react-router-dom
npm link
cd ../../../cooking-with-amateurs
npm link react-router-dom
echo "Linking chemistry-ui..."
cd ../chemistry-ui
npm link
cd ../cooking-with-amateurs
npm link chemistry-ui
echo "Finished!"
