from models.base_model import BaseModel
import peewee as pw
from peewee_validates import ModelValidator, StringField, validate_email

class User(BaseModel):
    email = pw.CharField(unique=True)
    password = pw.CharField()
    first_name = pw.CharField()
    last_name = pw.CharField()
    dob = pw.DateField()
    passport_num = pw.CharField(null=True)
    passport_img = pw.CharField(null=True)
    nationality = pw.CharField(max_length=2, null=True)
    language_primary = pw.CharField(null=True)
    language_secondary = pw.CharField(null=True)
    verified = pw.BooleanField(default=False)

    # save() function returns error
        # File "/.../aunty-backend/models/user.py", line 23, in save
        # self.errors.update(validator.errors)
        # AttributeError: 'User' object has no attribute 'errors'

    # def save(self, *args, **kwargs):
    #     # Ensure unique email and username
    #     validator = ModelValidator(self)
    #     validator.validate()
    #     self.errors.update(validator.errors)

    #     if self.errors:
    #         return 0
    #     else:
    #         self.updated_at = datetime.datetime.now()
    #         return super(BaseModel, self).save(*args, **kwargs)

    class CustomValidator(ModelValidator):
        email = StringField(required=True, validators=[validate_email()])

    class Meta:
        messages = {
            'email.validators': 'Enter a correct email address.'
        }
