import googletrans

translator = googletrans.Translator()
translated = translator.translate('Бороди́нское сраже́ние')
print("without parameter: ", end='')
print(translated.text)
print("en français s'il vous plaît : ", end='')
translated = translator.translate('Бороди́нское сраже́ние', dest='fr')
print(translated.text)

print("Now it's your turn to play!")
print("Enter a word or a phrase in any language you want")
your_phrase = input()
for i in range(len(your_phrase)):
  print(chr(ord(your_phrase[i])), your_phrase[i].encode('utf-8'), your_phrase[i].encode('utf-8').decode('utf-8', 'replace'))

print('here is the list of languages available')
print(googletrans.LANGUAGES)

print('choose your destination translation (if none it will be English)')
your_dest = input()

your_translated = translator.translate(your_phrase, dest=your_dest)
print(your_translated.text)
