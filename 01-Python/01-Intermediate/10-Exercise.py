
questions = [
    {
        'Question': 'How musch is 2 + 2?',
        'Options': ['1', '2', '3', '4', '5'],
        'Resposta': '4',
    },
    {
        'Question': 'How musch is 5*5?',
        'Options': ['25', '55', '10', '51', '50'],
        'Resposta': '25',
    },
    {
        'Question': 'How musch is 10/2?',
        'Options': ['4', '5', '2', '1', '6'],
        'Resposta': '5',
    },
]

def createQuest(questions: list):
    def getAnswer(ls: list):
        return ls['Options'] \
            [int(input("Choose one option: "))]
    def exec(index: int):
        current_q = questions[index]
        print(f"Question: {current_q['Question']}\n")
        for i, item in enumerate(current_q['Options']):
            print(f"{i}) {item}")
        print()
        cor_ans = current_q['Resposta']
        return getAnswer(current_q) == cor_ans
    return exec

qs = createQuest(questions)
current = 0
attempts = 0
while True:
    if current >= len(questions):
        print("Nice! You're amazing")
        print(f"You had {attempts} attempts")
        break
    current += 1 if qs(current) else current
    attempts += 1
    