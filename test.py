import re

paragraph = '''
1. "Happy" - Upbeat and joyful pop anthem with catchy melodies.
2. "Don't Stop Me Now" - Energetic and feel-good rock anthem by Queen.
3. "Walking on Sunshine" - Up-tempo and cheerful pop song with a catchy chorus.
4. "Good Vibrations" - Classic feel-good pop track with a sunny vibe.
5. "I Wanna Dance with Somebody" - Uplifting and danceable pop hit by Whitney Houston.
ENJOY!
'''

# Define a regular expression pattern to match song titles in quotes with the number prefix
pattern = r'(\d+\.\s*")([^"]*)(")'

def replace_song_titles(match):
    number = match.group(1).strip('. ')
    num=number[0]
    song_title = match.group(2)
    return f'<p class="clickable-text" onclick="handleClick({num})">{match.group(1)}{song_title}"{match.group(3)}</p>'

modified_paragraph = re.sub(pattern, replace_song_titles, paragraph)

print(modified_paragraph)
