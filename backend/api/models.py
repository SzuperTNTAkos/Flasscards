from django.db import models

# Create your models here.

class Deck(models.Model):

    class Meta:
        verbose_name = "Deck"
        verbose_name_plural = "Decks"

    def __str__(self):
        return self.name

class Flasscard(models.Model):

    class Meta:
        verbose_name = "Flasscard"
        verbose_name_plural = "Flasscards"

    def __str__(self):
        return self.name
