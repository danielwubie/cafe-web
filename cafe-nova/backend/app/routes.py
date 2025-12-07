from flask import Blueprint, request, jsonify
from flask_wtf.csrf import generate_csrf

from . import service

bp = Blueprint('api', __name__)

@bp.after_request
def set_csrf_cookie(response):
    response.set_cookie('csrf_token', generate_csrf())
    return response

@bp.route("/api/get_csrf", methods=["GET"])
def get_csrf():
    token = generate_csrf()
    response = jsonify({"csrf_token": token})
    response.set_cookie("csrf_token", token)
    return response


@bp.route('/api/menu', methods=['GET'])
def get_menu():
    res=service.get_menu_items()
    return jsonify(res)

@bp.route('/api/reservations', methods=['POST'])
def create_reservation():
    data = request.get_json()  # Parse JSON body
    res,code=service.reserve_table(data)
    return jsonify({**res,"status":code})




@bp.route('/api/reservations/<int:id>', methods=['GET'])
def get_reservation(id):
    res=service.get_reservation(id)
    return jsonify(res)


@bp.route('/api/newsletter', methods=['POST'])
def subscribe_newsletter():
    data = request.get_json()
    res,code=service.subscribe_newsletter(data)
    return jsonify({**res,"status":code})