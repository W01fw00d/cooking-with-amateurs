echo "[...Starting cooking-with-amateurs/chemistry-ui Local Linking Script...]"
cd ../../chemistry-ui
echo "[...Linking cooking-with-amateurs/react and related libs to chemistry-ui...]"
npm link ../cooking-with-amateurs/node_modules/react ../cooking-with-amateurs/node_modules/react-dom ../cooking-with-amateurs/node_modules/react-router-dom
echo "[...Building chemistry-ui...]"
npm run build
echo "...[Linking chemistry-ui to cooking-with-amateurs]..."
cd ../cooking-with-amateurs
npm link ../chemistry-ui
echo "[...Success!...]"
