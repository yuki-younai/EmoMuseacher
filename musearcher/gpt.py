import openai
import sys
# openai.log = "debug"
openai.api_key = "sk-NPEphAuAkU4J26UcbgbJLDBhl4cmdsbdpJNqu0t4Q6DMABKJ"
openai.api_base = "https://api.chatanywhere.cn"
import re

# paragraph = '''
# 1. "Happy" - Upbeat and joyful pop anthem with catchy melodies.
# 2. "Don't Stop Me Now" - Energetic and feel-good rock anthem by Queen.
# 3. "Walking on Sunshine" - Up-tempo and cheerful pop song with a catchy chorus.
# 4. "Good Vibrations" - Classic feel-good pop track with a sunny vibe.
# 5. "I Wanna Dance with Somebody" - Uplifting and danceable pop hit by Whitney Houston.
# ENJOY!
# '''

# Define a regular expression pattern to match song titles in quotes with the number prefix
pattern = r'(\d+\.\s*")([^"]*)(")'

def replace_song_titles(match):
    number = match.group(1).strip('. ')
    num=number[0]
    song_title = match.group(2)
    return f'<p class="clickable-text" onclick="handleClick({num})">{match.group(1)}{song_title}"{match.group(3)}</p>'

# modified_paragraph = re.sub(pattern, replace_song_titles, paragraph)


def add_text_after_character(string, character, text):
    pattern = re.escape(character)  # 转义特定字符
    replacement = f"{character}{text}"  # 添加字符
    modified_string = re.sub(pattern, replacement, string)  # 替换特定字符
    return modified_string

# 非流式响应
# completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Hello world!"}])
# print(completion.choices[0].message.content)

def gpt_35_api_stream(concont):
    """为提供的对话消息创建新的回答 (流式传输)

    Args:
        messages (list): 完整的对话消息
        api_key (str): OpenAI API 密钥

    Returns:
        tuple: (results, error_desc)t
    """
    messages=[{'role': 'user','content': str(concont)},]
    try:
        response = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=messages,
            stream=True,
        )
        completion = {'role': '', 'content': ''}
        for event in response:
            if event['choices'][0]['finish_reason'] == 'stop':
                #print(f'{completion["content"]}')
                break
            for delta_k, delta_v in event['choices'][0]['delta'].items():
                #print(f'{delta_v}')
                completion[delta_k] += delta_v
        messages.append(completion)  # 直接在传入参数 messages 中追加消息
        #con=add_text_after_character(completion["content"], ".", "<br>")
        con = re.sub(pattern, replace_song_titles, completion["content"])
        return con
    except Exception as err:
        return (False, f'OpenAI API 异常: {err}')


content= str(sys.argv[1])
print(gpt_35_api_stream(str(content)))
