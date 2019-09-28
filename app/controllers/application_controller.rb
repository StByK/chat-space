class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # ログイン済みのユーザーのみにアクセス許可
  before_action :authenticate_user!
  # deviseで利用可能なパラメータを増やす、device由来のアクションの前に
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  # deviseのストロングパラメーターをいじる
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end

