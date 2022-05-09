def on_gesture_tilt_right():
    global IconGame
    if IconGame == "":
        pass
    if IconGame == "1":
        IconGame += 2
    if IconGame == "2":
        IconGame += 3
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_pressed_b():
    if IconGame == 0:
        basic.show_leds("""
            # # . . .
                        # # # . .
                        . # # # .
                        . . # # .
                        . . . . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

IconGame = 0
basic.show_leds("""
    . # # # .
        # . . . #
        # . . . #
        # . . . .
        . # # . .
""")
basic.show_leds("""
    . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # . .
""")
basic.show_leds("""
    . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # . # .
""")
basic.show_leds("""
    . # # # .
        # . . . #
        # . . . #
        # . . . #
        . . # # .
""")
basic.show_leds("""
    . # # # .
        # . . . #
        # . . . #
        . . . . #
        . # # # .
""")
basic.show_icon(IconNames.HAPPY)
music.play_melody("C5 B4 A4 - - - - - ", 120)

def on_forever():
    pass
basic.forever(on_forever)
