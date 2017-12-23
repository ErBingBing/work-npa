"""npa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from django.contrib import admin
from npapre.views import IndexView, LoginView, RegisterView,MyAccountView, IdrzView
import xadmin

urlpatterns = [
    url(r'^xadmin/', xadmin.site.urls),
    url(r'^index', IndexView.as_view(), name='index'),  # 首页
    url(r'^login', LoginView.as_view()),  # 登录
    url(r'^register', RegisterView.as_view()),  # 注册
    url(r'^myaccount', MyAccountView.as_view()),  #个人中心
    url(r'^id-rz', IdrzView.as_view()),  #个人中心中的认证

]
