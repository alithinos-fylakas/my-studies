import pygame
from gamemanager import GameManager

def main():
	pygame.init()

	gamemanager = GameManager()

	gamemanager.runGame()

if __name__ == '__main__':
	main()