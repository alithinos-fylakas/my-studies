import logging as log

class Logging:
	def __init__(self):
		#Log
		self.level_log = log.DEBUG
		self.formating = "[%(levelname)s] - %(message)s"
		log.basicConfig(level = self.level_log, format = self.formating)

	def fps(self, fps):
		log.info(f"FPS: {fps}")