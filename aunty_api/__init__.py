from app import app
from flask_cors import CORS

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

## API Routes ##
from aunty_api.blueprints.users.views import users_api_blueprint
from aunty_api.blueprints.sessions.views import sessions_api_blueprint
from aunty_api.blueprints.pins.views import pins_api_blueprint
from aunty_api.blueprints.contacts.views import contacts_api_blueprint
from aunty_api.blueprints.sos.views import sos_api_blueprint


app.register_blueprint(users_api_blueprint, url_prefix='/api/v1/users')
app.register_blueprint(sessions_api_blueprint, url_prefix='/api/v1/sessions')
app.register_blueprint(pins_api_blueprint, url_prefix='/api/v1/pins')
app.register_blueprint(contacts_api_blueprint, url_prefix='/api/v1/contacts')
app.register_blueprint(sos_api_blueprint, url_prefix='/api/v1/sos')
