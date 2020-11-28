export interface Literals {
    noIngredients: String;
    noSteps: String;
    ingredients: String;
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
