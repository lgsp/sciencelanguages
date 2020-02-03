################################################################################

def new_page(file_name):
    new_page = input('Do you want a new page? (Y/N) ')
    if new_page.upper() == 'Y':
        file_name.write('\\newpage\n')
        

############################################################

def vspace(file_name):
    vspace = input('vertical space (in cm): ')
    file_name.write('\n\\vspace{' + vspace + 'cm}\n')

############################################################

def documentclass(file_name):
    documentclass = input('documentclass : ')
    pt_number = input('Xpt, X = ')
    paper_size = """
    paper size: 
    A: a0paper to a6paper, 
    B: b0paper to b6paper,
    C: c0paper to c6paper,
    b: b0j to b6j,
    ansi: ansiapaper, ansibpaper, ansicpaper, ansidpaper, ansiepaper,
    official: letterpaper, executivepaper, legalpaper
    """
    print(paper_size)
    paper = input('paper size: ')
    file_name.write('\\documentclass[' + pt_number + 'pt,' + paper)
    file_name.write(']{' + documentclass + '}\n')

#####################################################################    
    
def setlanguages(file_name):
    mainlanguage = input('mainlanguage: ')
    file_name.write('\\setmainlanguage{' + mainlanguage + '}\n')

    otherlang = input('Do you want to add another language? (Y/N) ')
    if otherlang.upper() == 'Y':
        file_name.write('\\setotherlanguages{')
        while True:
            otherlanguage = input('Other language? ')
            file_name.write(otherlanguage)
            stop = input('Do you want to stop? (Y/N) ')
            if stop.upper() == 'Y':
                file_name.write('}\n')
                break
            else:
                file_name.write(', ')

################################################################################
                
def encoding_packages(file_name):
    file_name.write('\\usepackage{fontspec}\n')
    file_name.write('\\usepackage{xunicode}\n')
    file_name.write('\\newfontfamily\cyrillicfont{Times New Roman}\n')
    file_name.write('\\usepackage{polyglossia}\n')
    file_name.write('\\usepackage{xltxtra}\n')

#######################################################################
    
def hyperlinks_packages(file_name):
    file_name.write('\\usepackage{graphics}\n')
    file_name.write('\\usepackage{hyperref}\n')
    file_name.write('\\hypersetup{\n')
    file_name.write('\tcolorlinks=true,\n')
    file_name.write('\tcitecolor=electricblue,\n')
    file_name.write('\tfilecolor=orange,\n')
    file_name.write('\tlinkcolor=red,\n')
    file_name.write('\turlcolor=blue\n')
    file_name.write('}\n')

######################################################################    
    
def youtube_playlist(file_name):
    playlist_number = """How many playlist do you want to promote 
    for this channel?"""
    print(playlist_number)
    playlist = int(input('number = '))
    if playlist >= 1:
        file_name.write('\\begin{enumerate}\n')
        for j in range(playlist):
            playlist_name = input('playlist name: ')
            playlist_url = input('url: ')
            file_name.write("\\item {\\sc Regardez ma playlist ")
            file_name.write("\\href{" + playlist_url + "}")
            file_name.write("{" + playlist_name + "} : ")
            file_name.write("\\url{" + playlist_url + "}}\\par\n")
        file_name.write('\\end{enumerate}\n')
    else:
        return
    
######################################################################

def promote(file_name, media):
    if media == 'blog':
        subscribe, promo, playlist  = 'Visit my ', 'blog', 'no playlist'
    elif media == 'youtube':
        subscribe, promo, playlist = 'Subscribe to my ', 'YouTube channel', youtube_playlist(file_name)
    
    print('How many ' + promo + ' do you want to promote?')
    number_media = int(input('number = '))
    file_name.write('\\begin{enumerate}\n')
    
    for i in range(number_media):
        promo_name = input(promo + ' name: ')
        promo_url = input('url: ')
        file_name.write('\\item {\\sc ' + subscribe + promo + '} ')
        russian = input('Was it Russian? (Y/N) ')
        if russian.upper() == 'Y':
            file_name.write('\\textrussian{' + promo_name + '} : ')
        else:
            file_name.write('\\href{' + promo_url + '}{' + promo_name + '} : ')
            
        file_name.write('\\url{' + promo_url + '}\n')
        playlist
        
    file_name.write('\\end{enumerate}\n')
    
###########################################################################

def blogs_to_promote(file_name):
    promote(file_name, 'blog')

###########################################################################
        
def youtube_channels(file_name):
    promote(file_name, 'youtube')

##########################################################################


def author_full_name(file_name):
    file_name.write('\nBY\n')
    author_first_name = input('author first name: ')
    author_last_name = input('author last name: ')
    file_name.write('\n{\Large ' + author_first_name + ' \\textsc{')
    file_name.write(author_last_name + '} \par}\n')

######################################################################

def your_title(file_name):
    file_name.write('\n\\begin{center}\n')
    your_title = input('Type your titlepage: ')
    file_name.write("\n{\Large {\sc " + your_title + " }}")
    vspace(file_name)
    file_name.write('\n\\end{center}\n')

############################################################

def title_page(file_name):
    file_name.write('\n\\begin{titlepage}\n')
    your_title(file_name)
    new_page(file_name)
    vspace(file_name)
    file_name.write('\n\\begin{center}\n')
    author_full_name(file_name)
    vspace(file_name)
    file_name.write('\n\\end{center}\n')
    blogs_to_promote(file_name)
    new_page(file_name)
    file_name.write('\n\\begin{center}\n')
    youtube_channels(file_name)
    file_name.write('\n\\end{center}\n')
    file_name.write('\n\\end{titlepage}\n')

###############################################

def page_links(file_name):
    left_url = input('left url on each page (without https): ')
    file_name.write('\\fancyhead[L]{\\tt \\url{https://' + left_url + '}}\n')
    right_url = input('right url on each page (without https): ')
    file_name.write('\\fancyhead[R]{\\tt \\url{https://' + right_url + '}}\n')
    file_name.write('\\renewcommand{\\headrulewidth}{.2pt}\n')
    file_name.write('\\renewcommand{\\footrulewidth}{.4pt}\n')

########################################################################################

def subsection_1_1(file_name):
    file_name.write('\\subsection{Examples}\n')
    file_name.write('\\label{sec:org4c61b95}\n')

    file_name.write('\\begin{description}\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/play}{to play}}] he plays ')
    file_name.write('(prononcé comme un z)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/stop}{to stop}}] he stops ')
    file_name.write('(prononcé comme un s)\n')
    file_name.write('\\end{description}\n')

####################################################################################################

def section_1(file_name):
    file_name.write('\\section{The Rule}\n')
    file_name.write('\\label{sec:org11a7b5a}\n')

    file_name.write("\\textbf{La 3ème personne du singulier du présent} prend un \\textbf{s}, ")
    file_name.write("que l'on  prononce toujours (seules exceptions : les auxiliaires de modalité)\n")

    file_name.write("L'oubli de ce s oralement comme à l'écrit est perçu par les anglophones ")
    file_name.write("comme une faute grossière.\n")

    subsection_1_1(file_name)

####################################################################################################

def subsection_2_1(file_name):
    file_name.write('\\subsection{Modification sonore}\n')
    file_name.write('\\label{sec:org2823a0d}\n')

    file_name.write('\\begin{description}\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/have}{to have}}] he has ')
    file_name.write('(prononcé comme un z)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/be}{to be}}] he is ')
    file_name.write('(prononcé comme un z)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/do}{to do}}] he does ')
    file_name.write('(prononcé comme un z)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/go}{to go}}] he goes ')
    file_name.write('(prononcé comme un z)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/say}{to say}}] he says ')
    file_name.write('(prononcé comme un z)\n')
    file_name.write('\\end{description}\n')

####################################################################################################

def subsection_2_2(file_name):
    file_name.write('\\subsection{Ajout du es}\n')
    file_name.write('\\label{sec:orgfd7621c}\n')

    file_name.write('\\begin{description}\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/cross}{to cross}}] he crosses ')
    file_name.write('(es prononcé iz)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/relax}{to relax}}] he relaxes ')
    file_name.write('(es prononcé iz)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/wash}{to wash}}] he washes ')
    file_name.write('(es prononcé iz)\n')
    file_name.write('\\item[{\\href{https://fr.bab.la/conjugaison/anglais/reach}{to reach}}] he reaches ')
    file_name.write('(es prononcé iz)\n')
    file_name.write('\\end{description}\n')

####################################################################################################

def subsection_2_3(file_name):
    file_name.write('\\subsection{Ajout du s avec le son iz}\n')
    file_name.write("\\label{sec:orgee2fcc8}")

    file_name.write("\\begin{description}\n")
    file_name.write("\\item[{\\href{https://fr.bab.la/conjugaison/anglais/change}{to change}}] he changes\n")
    file_name.write("\\item[{\\href{https://fr.bab.la/conjugaison/anglais/judge}{to judge}}] he judges\n")
    file_name.write("\\end{description}\n")

####################################################################################################

def subsection_2_4(file_name):
    file_name.write("\\subsection{Les verbes terminés par y précédé d'une consonne}\n")
    file_name.write("\\label{sec:org8062a1c}\n")

    file_name.write("\\begin{description}\n")
    file_name.write("\\item[{\\href{https://fr.bab.la/conjugaison/anglais/carry}{to carry}}] he carries\n")
    file_name.write("\\item[{\\href{https://fr.bab.la/conjugaison/anglais/fly}{to fly}}] he flies\n")
    file_name.write("\\end{description}\n")

    file_name.write("\subsection{Les verbes terminés par y précédé d'une voyelle}\n")
    file_name.write("\\label{sec:org1606ffb}\n")

    file_name.write("\\begin{description}\n")
    file_name.write("\\item[{\\href{https://fr.bab.la/conjugaison/anglais/buy}{to buy}}] he buys\n")
    file_name.write("\\item[{\\href{https://fr.bab.la/conjugaison/anglais/destroy}{to destroy}}] he ")
    file_name.write("destroys\n")
    file_name.write("\\end{description}\n")

####################################################################################################

def section_2(file_name):
    file_name.write('\\section{Irrégularités}\n')
    file_name.write('\\label{sec:orga23384d}\n')
    
    subsection_2_1(file_name)

    subsection_2_2(file_name)

    subsection_2_3(file_name)

    subsection_2_4(file_name)

####################################################################################################    
    
def xelatex(author, title, file_name):
    file_name = open(file_name + '.tex', 'w')
    documentclass(file_name)
    encoding_packages(file_name)
    setlanguages(file_name)
    file_name.write('\\usepackage{fancyhdr}\n')
    file_name.write('\\pagestyle{fancy}\n')
    hyperlinks_packages(file_name)
    file_name.write('\\author{' + author + '}\n')
    file_name.write('\\date{}\n')
    file_name.write("\\title{" + title + "}\n")

    file_name.write('\n\\begin{document}\n')

    titlepage = input('Do you want a title page? (Y/N) ')
    if titlepage.upper() == 'Y':
        title_page(file_name)

    file_name.write('\n\\tableofcontents\n')
    file_name.write('\n\\clearpage\n')
    
    page_links(file_name)

    section_1(file_name)

    section_2(file_name)
    
    file_name.write("\\end{document}")


author = 'Laurent Garnier'
title = "Règle fondamentale de l'anglais n°1 avec Python 3 et \\XeLaTeX"
file_name = 'fundamental_rule_1'
real_title = "Règle fondamentale n°1\\par pour apprendre l'anglais\\par avec Python 3\\par et \\XeLaTeX} \\par"

xelatex(author, title, file_name)
