python manage.py migrate

# https://docs.djangoproject.com/en/3.1/ref/contrib/staticfiles/
python manage.py collectstatic --no-input

# Remove old frontend build and copy new frontend_temp into frontend folder
rm -rf /frontend/build/* && cp -r /frontend_tmp/* /frontend

# https://docs.gunicorn.org/en/stable/run.html
gunicorn -w 4 -b 0.0.0.0:8000 project.wsgi:application