from PIL import Image

logo = Image.open("html_coursera/module3/images/jumbotron_768.jpg")
#logo.show()
new_image = logo.resize((375,211))
new_image.show()
