import pygame, sys
from settings import *
from logging_inP import Logging

class GameManager:
	def __init__(self):

		#Major setup
		self.clock = pygame.time.Clock()

		#main screen
		self.screen = pygame.display.set_mode( (SCREEN_WIDTH, SCREEN_HEIGHT) )

		pygame.display.set_caption("O-senYo")

		#State machine
		self.state = "start"

		#Log
		self.log = Logging()

	def createMenu(self):
		pass

	def createLevel(self):
		pass

	def stateMachine(self):

		#State machine

		match self.state:
			case "start":
				pass
			case "menu":
				pass
			case "loading":
				pass
			case "gameplay":
				pass
			case "pause":
				pass
			case "restart":
				pass
			case "dead":
				pass
			case "win":
				pass
			case "quit":
				pass
			case _:
				pass

	def runGame(self):

		while True:
		
			for event in pygame.event.get():
				if event.type == pygame.QUIT:
					pygame.quit()
					sys.exit()

			#Game
			self.screen.fill('black')

			self.stateMachine()

			#Config
			pygame.display.update()
			self.clock.tick(FPS)

			#Logging
			self.log.fps(self.clock.get_fps())
