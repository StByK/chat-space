class MessagesController < ApplicationController
  before_action :set_room

  def index
    @message = Message.new
    @messages = @room.messages.includes(:user)
  end

  def create
    @message = @room.messages.create(message_params)
    respond_to do |format|
      format.html {redirect_to room_messages_path(@room)}
      format.json
    render action: :index and return unless @message.save
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :image).merge(user_id: current_user.id)
  end

  def set_room
    @room = Room.find(params[:room_id])
    @members = @room.users
  end

end
