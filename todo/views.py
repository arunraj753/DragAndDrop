from django.shortcuts import render
from django.http import HttpResponse
from .models import Task,Category
from .forms import TaskForm

def home(request):
	defaultCategory = Category.objects.get(pk=1)

	if request.method == "POST":
		print("POST request recieved")
		data = (request.POST.get('tasks'))
		tasks = request.POST.getlist('tasks')
		print(tasks)
		for i in range (len(tasks)-1):
			print(i)
			print(tasks[i])

			newtask = Task()
			newtask.task = tasks[i]
			newtask.category = defaultCategory
			newtask.save()
		

	form 		= TaskForm()
	categories  = Category.objects.all()

	context = {'categories':categories,'form':form}

	return render(request,'todo/home.html',context)

def addTasks(request):
	return render

def categoryChange(request,pk,id):
	print("category cahnge")
	task 	 = Task.objects.get(pk=pk)
	category = Category.objects.get(pk=id)
	task.category = category
	task.save() 
	return HttpResponse("Category Changed")


