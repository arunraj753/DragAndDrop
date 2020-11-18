from django.db import models
from django.contrib.auth.models import User



class Category(models.Model):

	category = models.CharField(max_length=40)
	def __str__(self):
		return self.category

class Task(models.Model):

	task 	 =	models.CharField(max_length=40)
	status	 =	models.BooleanField(default=False)
	category =  models.ForeignKey(Category,on_delete=models.CASCADE)
 	
	def __str__(self):
		return self.task
