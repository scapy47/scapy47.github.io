from manim import * # type: ignore

class SquareToCircle(Scene):
    def construct(self):
        # Create a square
        square = Square()
        square.set_fill(BLUE, opacity=0.5)

        # Show the square
        self.play(Create(square))
        self.wait(1)

        # Transform into a circle
        circle = Circle()
        circle.set_fill(RED, opacity=0.5)

        self.play(Transform(square, circle))
        self.wait(1)

        # Fade out
        self.play(FadeOut(square))
