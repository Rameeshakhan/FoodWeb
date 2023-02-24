import React from 'react'

const foodItems = () => {
    const itemList = [
        {
            "id": 1,
            "title": "Cheeseburger",
            "description": "A delicious burger with cheese, lettuce, tomato, and pickles.",
            "price": 9.99,
            "image": "https://example.com/images/cheeseburger.jpg"
        },
        {
            "id": 2,
            "title": "Margherita Pizza",
            "description": "A classic pizza with tomato sauce, mozzarella cheese, and basil.",
            "price": 12.99,
            "image": "https://example.com/images/margherita-pizza.jpg"
        },
        {
            "id": 3,
            "title": "Fish and Chips",
            "description": "Crispy fried fish and fries with tartar sauce.",
            "price": 14.99,
            "image": "https://example.com/images/fish-and-chips.jpg"
        },
        {
            "id": 4,
            "title": "Caesar Salad",
            "description": "Romaine lettuce with parmesan cheese, croutons, and Caesar dressing.",
            "price": 7.99,
            "image": "https://example.com/images/caesar-salad.jpg"
        },
        {
            "id": 5,
            "title": "Pad Thai",
            "description": "A Thai stir-fried noodle dish with peanuts, tofu, and vegetables.",
            "price": 11.99,
            "image": "https://example.com/images/pad-thai.jpg"
        },
        {
            "id": 6,
            "title": "Chicken Tikka Masala",
            "description": "A spicy Indian curry dish with grilled chicken and tomato sauce.",
            "price": 15.99,
            "image": "https://example.com/images/chicken-tikka-masala.jpg"
        },
        {
            "id": 7,
            "title": "Sushi Roll",
            "description": "A Japanese rice and seaweed roll filled with various ingredients.",
            "price": 8.99,
            "image": "https://example.com/images/sushi-roll.jpg"
        },
        {
            "id": 8,
            "title": "Pho",
            "description": "A Vietnamese soup with rice noodles, beef broth, and herbs.",
            "price": 10.99,
            "image": "https://example.com/images/pho.jpg"
        },
        {
            "id": 9,
            "title": "Grilled Cheese Sandwich",
            "description": "A classic sandwich with melted cheese and toasted bread.",
            "price": 6.99,
            "image": "https://example.com/images/grilled-cheese-sandwich.jpg"
        },
        {
            "id": 10,
            "title": "Pasta Carbonara",
            "description": "An Italian pasta dish with bacon, eggs, and parmesan cheese.",
            "price": 13.99,
            "image": "https://example.com/images/pasta-carbonara",
        }
    ]

    const items = itemList.map(item => {
        return <li>{`${item.title} - ${item.price} : ${item.description}`}</li>
    }
    )
    return (
        <div>
            <p>{items}</p>
        </div>
    );
}

export default foodItems