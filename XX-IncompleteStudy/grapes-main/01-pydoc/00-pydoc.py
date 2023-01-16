
"""
This module has the class math.
"""

class math():
    def __init__(self, number1, number2):

        """
        -Building a new object: math

        :param number1: var with the first number
        :param number2: var with the second number
        :return: no return
        """

        self.numberA = number1
        self.numberB = number2

    def sum(self, numberA, numberB):

        """
        Returns the sum of the numbers!
        """

        return numberA + numberB

def main():
    """
        Main function of python
    """
    FIRST = math(1, 2)

if __name__ == "__main__":
    main()