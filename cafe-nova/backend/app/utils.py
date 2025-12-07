def generate_response(data):
    # Function to generate a response based on input data
    return {
        "status": "success",
        "data": data
    }

def assign_table():
    # Function to assign a random table number between 1 and 30
    import random
    return random.randint(1, 30)