let recipes = [
    {id: '1', title: 'Hummus', ingredients: ['chick peas', 'mustard']},
    {id: '2', title: 'Roast Chicken', ingredients: ['chicken', 'paprika', 'salt', 'pepper', 'lemon juice']},
    {id: '3', title: 'Pizza', ingredients: ['dough', 'cheese', 'tomato puree', 'chirizo', 'salt', 'pepper']}
]

let authors = [
    {id: '1', name: 'Mathys', verified: true},
    {id: '2', name: 'Annelise', verified: true},
    {id: '3', name: 'Wilhelm', verified: false}
]

let reviews = [
    {id: '1', rating: 7, comment: 'lorem ipsum', author_id: '1', recipe_id: '1'},
    {id: '2', rating: 9, comment: 'lorem ipsum', author_id: '2', recipe_id: '2'},
    {id: '3', rating: 4, comment: 'lorem ipsum', author_id: '3', recipe_id: '3'},
    {id: '4', rating: 5, comment: 'lorem ipsum', author_id: '3', recipe_id: '1'},
    {id: '5', rating: 10, comment: 'lorem ipsum', author_id: '2', recipe_id: '3'},
    {id: '6', rating: 6, comment: 'lorem ipsum', author_id: '1', recipe_id: '2'},
    {id: '7', rating: 9, comment: 'lorem ipsum', author_id: '2', recipe_id: '1'},
]

export default { recipes, authors, reviews }