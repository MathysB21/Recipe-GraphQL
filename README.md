# Recipe-GraphQL
This GraphQL API is built with Apollo Server. I built this to sharpen up on GraphQL

## About
I built this GraphQL API with Apollo server and a hardcoded database to test my skills and practice. 
I have built this to query a Database of recipes and have made multiple queries and mutations to request and modify the data. You can find the queries and mutations below.

## Requirements
You will need to have Node.js installed, once installed you can open a terminal in the project folder and run the following:

```
npm install
```
This will install all the necessary packages

## How to run
As soon as all the packages are installed, you can run the following command and then navigate to localhost:5000 to see the Apollo Server page
```
npm run start
```

## My Queries and Mutations
### Recipes Query
```
query RecipesQuery {
	recipes {
		title
		ingredients
	}
}
```

### Authors Query

```
query AuthorsQuery {
	authors {
		name
		id
		verified
	}
}
```

### Reviews Query

```
query ReviewsQuery {
	reviews {
		id
		rating
		comment
	}
}
```

### Review Query

```
query ReviewQuery ($id: ID!) {
	review(id: $id) {
		rating
		recipe {
			title
			reviews {
				rating
				author {
					name
				}
			}
		}
		author {
			name
			verified
		}
	}
}
```

Query variables:

```
{
	"id": "1"
}
```

### Recipe Query

```
query RecipeQuery ($id: ID!) {
	recipe(id: $id) {
		title
		reviews {
			comment
			rating
		}
	}
}
```

Query variables:

```
{
	"id": "1"
}
```

### Author Query

```
query AuthorQuery ($authorId: ID!) {
	author(id: $authorId) {
		name
		reviews {
			comment
			rating
		}
	}
}
```

Query variables:

```
{
	"authorId": "3"
}
```

### Delete Recipe Mutation

```
mutation DeleteRecipeMutation ($deleteRecipeId: ID!) {
	deleteRecipe(id: $deleteRecipeId) {
		id
		title
	}
}
```

Query variables:

```
{
	"deleteRecipeId": "1"
}
```

### Add Recipe Mutation

```
mutation AddRecipeMutation ($recipe: AddRecipe!) {
	addRecipe(recipe: $recipe) {
		id
		title
		ingredients
	}
}
```

Query variables:

```
{
	"recipe": {
		"title": "A new recipe",
		"ingredients": ["test this", "test that"]
	}
}
```

### Update Recipe Mutation

```
mutation updateRecipeMutation ($updateRecipeId: ID!, $edits: EditRecipe!) {
	updateRecipe(id: $updateRecipeId, edits: $edits) {
		title
	}
}
```

Query variables:

```
{  
    "updateRecipeId": "1",
    "edits": {
        "title": "burnt chicken"
    }
}
```
