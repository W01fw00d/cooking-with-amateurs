const httpGet = (params: string, callback: Function) => {
  // prod
  // const url = `/${params}`;
  // dev
  const url = `http://localhost:5000/${params}`;
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      console.log('xmlHttp.responseText', xmlHttp.responseText);
      callback(JSON.parse(xmlHttp.responseText));
    }
  };
  xmlHttp.open('GET', url, true);
  xmlHttp.send(null);
};

export function getRecipes(callback: Function) {
  httpGet('recipes', callback);
}

export function getRecipeDetails(id: string, callback: Function) {
  httpGet(`details/${id}`, callback);
}