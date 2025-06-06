from manim import *

class light(Scene):
    def construct(self):
        self.wait(2)
        self.play(Create(NumberPlane()))
        self.wait(1)
