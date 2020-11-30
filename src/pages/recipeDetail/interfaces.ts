export interface Literals {
    image: String;
    ingredients: String;
    noIngredients: String;
    steps: String;
    noSteps: String;
}

export interface RecipeDetails {
    name: String;
    code: String;
    image: String;
    description: String;
    preparationTime: String;
    ingredients: { sectionName: any; items: any; }[];
    steps: [];
}
