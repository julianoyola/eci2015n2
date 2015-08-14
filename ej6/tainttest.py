import taintmode
from taintmode import *

def bypass(some_string):
    cloned_string = ""
    for char in some_string:
        #print char
        ascii_code = ord(char)
        cloned_string = cloned_string + str(unichr(ascii_code))
    return cloned_string

def test_taint_and_bypass(some_string):
    print "--------------"
    
    # If you run tainted(tstring) in the Python prompt, you should see True
    tstring = taint(some_string)
    print tstring + " : " + str(tainted(tstring)) + "!"

    # Bypass taint
    ustring = bypass(tstring)

    # Now, ustring should have the same value as tstring but it is not tainted
    # If you run tainted(ustring) in the Python prompt, you should see False
    print ustring + " : " + str(tainted(ustring)) + "!"
    print "Are the tainted and the untainted strings equal? " + str(ustring == tstring) + "!"


# Test with a sample string
test_taint_and_bypass("This is tainted data (or at least it should be)")

# Test with another sample string
test_taint_and_bypass("Another string...")

# Test with an empty string
test_taint_and_bypass("")

