from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime

# Create your models here.
class UserInfo(AbstractUser):
    '''
    用户模型
    '''
    user_phone_number = models.CharField(max_length=20, verbose_name='手机号')
    user_position = models.CharField(max_length=20, null=True, blank=True, verbose_name='职位')
    user_account_type = models.BooleanField(choices=((0, '注册用户'), (1, '认证用户'), (2, '后台创建')), default=2,verbose_name='账号类型')
    user_image = models.ImageField(upload_to='image/%Y%m', default='image/default.png', max_length=100,verbose_name='头像')
    masterinfo = models.ForeignKey(MasterInformation, verbose_name='所属公司')  # 多对一，主体信息登记表

    class Meta:
        verbose_name = '用户信息';
        verbose_name_plural = verbose_name;
        db_table = 'npl_user'

    def __str__(self):
        return self.username


class MasterInformation(models.Model):
    #
    #      营业执照上传  开户许可证上传  法人代表身份证正面上传   法人代表身份证fan面上传   企业logo上传  标注  创建日期
    # 修改日期 删除日期  删除状态  认证状态
    info_company_name = models.CharField(max_length=20, verbose_name='企业名称')
    info_register_num = models.CharField(max_length=20, verbose_name='营业执照注册号')
    info_code = models.CharField(max_length=20, verbose_name='企业简码')
    info_type = models.CharField(choices=(('0','催收公司'),('1','律师'),('2','拍卖行'),('3','典当行'),('4','催收公司')),max_length=20, verbose_name='机构类型')
    info_bank = models.CharField(max_length=20, verbose_name='开户银行')
    nfo_bank = models.CharField(max_length=20, verbose_name='开户银行')
    info_account = models.CharField(max_length=20, verbose_name='账号')
    info_location = models.CharField(max_length=20, verbose_name='开户银行所在城市')
    info_legal_name = models.CharField(max_length=20, verbose_name='法人代表姓名 ')
    info_idcade = models.CharField(max_length=20, verbose_name='身份证号')
    info_address = models.CharField(max_length=20, verbose_name='公司地址')

    info_license_address = models.CharField(upload_to='image/masterinfo/%Y%m',max_length=200, verbose_name='营业执照上传')
    info_open_user = models.CharField(upload_to='image/masterinfo/%Y%m',max_length=20, verbose_name='开户许可证')
    info_idcade_positive = models.CharField(upload_to='image/masterinfo/%Y%m',max_length=200, verbose_name='法人代表身份证正面')
    info_idcade_back = models.CharField(upload_to='image/masterinfo/%Y%m',max_length=200, verbose_name='法人代表身份证背面')
    info_logo = models.CharField(upload_to='image/masterinfo/%Y%m',max_length=200, verbose_name='企业logo')

    info_remark = models.CharField(max_length=20, verbose_name='标注')
    info_create_time = models.DateTimeField(default=datetime.now, verbose_name='创建日期')
    info_update_time = models.DateTimeField(default=datetime.now, verbose_name='修改日期')
    info_delete_time = models.DateTimeField(default=datetime.now, verbose_name='删除日期')
    info_delete_status = models.CharField(choices=(('0','未删除'),('1','删除')),default=0 ,max_length=20, verbose_name='删除状态')
    info_certification_status = models.CharField(choices=(('0','未认证'),('1','待审核'),('2','通过审核'),('3','审核失败')),max_length=20, default='0', verbose_name='认证状态')
