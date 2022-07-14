from django.db import models


class Category(models.Model):
    category = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.category


class Recipe(models.Model):
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    body = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return self.title
