from django.shortcuts import render,redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic.base import View
import json
from django.contrib.auth import authenticate, login, logout  #登入和登出
from django.core.urlresolvers import reverse
from django.core import serializers
from npapre.models import UserInfo
from django.forms.models import model_to_dict
from django.contrib.auth.hashers import make_password


class IndexView(View):
    '''
    首页
    '''
    def get(self, request):
        return render(request, 'index.html')


class LoginView(View):
    '''
    登录
    '''
    def get(self, request):
        return render(request, 'login.html')
    def post(self,request):
        username = request.POST.get('userName')
        password = request.POST.get('passWord')
        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)  # 验证成功之后登录
            return HttpResponse(json.dumps({'code': 1, 'message': str(user)}), content_type='application/json')
        else:
            return HttpResponse(json.dumps({'code': 0, 'message': '用户名密码错误'}), content_type='application/json')

class RegisterView(View):
    '''
    注册
    '''
    def get(self, request):
        return render(request, 'register.html')

    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        number = request.POST.get('number')

        # uname,is_existence = UserInfo.objects.get_or_create(username = username)
        is_existence = UserInfo.objects.filter(username=username)
        if is_existence:
            return HttpResponse(json.dumps({'code': 0, 'message': '用户名已经存在'}), content_type='application/json')
        else:
            user = UserInfo(username=username, password=make_password(password), user_phone_number=number, user_account_type=0)
            user.save()
            return HttpResponse(json.dumps({'code': 1, 'message': str(user)}), content_type='application/json')


class MyAccountView(View):
    '''
    个人中心
    '''
    def get(self, request):
        return render(request, 'myaccount.html')

        # return HttpResponse(json.dumps({'message':request.user}), content_type='application/json')
        # return render(request, 'myaccount.html')

    def post(self, request):
        user = UserInfo.objects.get(username=request.GET.get('username'))
        # 用户名，email，手机号，头像，账户类型
        message = {'username': user.username, 'email': user.email, 'number': user.user_phone_number,
                   'image': user.user_image.name, 'type': user.user_account_type, 'password':user.username, 'id':user.id}
        # return HttpResponse(json.dumps({'message': message}), content_type='application/json')
        return HttpResponse(json.dumps(message), content_type='application/json')


class IdrzView(View):
    '''
    认证中心
    '''
    def get(self,request):
        return render(request, 'id-rz.html')