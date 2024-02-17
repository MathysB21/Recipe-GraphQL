import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './_db.js'

// Types
import { typeDefs } from './schema.js'

// Resolvers
const resolvers = {
    Query: {
        recipes () {
            return db.recipes
        },
        recipe (_, args) {
            return db.recipes.find((recipe) => recipe.id === args.id)
        },
        reviews () {
            return db.reviews
        },
        review (_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        authors () {
            return db.authors
        },
        author (_, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    },
    Recipe: {
        reviews (parent) {
            return db.reviews.filter((r) => r.recipe_id === parent.id)
        }
    }, 
    Author: {
        reviews (parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Review: {
        author (parent) {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        recipe (parent) {
            return db.recipes.find((r) => r.id === parent.recipe_id)
        }
    },
    Mutation: {
        deleteRecipe (_, args) {
            db.recipes = db.recipes.filter((r) => r.id !== args.id)

            return db.recipes
        },
        addRecipe (_, args) {
            let recipe = {...args.recipe, id: Math.floor(Math.random()*10000).toString()
            }
            db.recipes.push(recipe)

            return recipe
        }, 
        updateRecipe (_, args) {
            db.recipes = db.recipes.map((r) => {
                if (r.id === args.id) {
                    return {...r, ...args.edits}
                }

                return r
            })

            return db.recipes.find((r) => r.id === args.id)
        }
    }
}

// Server Setup
const server = new ApolloServer ({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`Server ready at: ${url}`);