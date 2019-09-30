class RoomsController < ApplicationController

def index
end

def new
  @room = Room.new
  @room.users << current_user
end

def create
  Room.create(create_params)
  if Room.create
    redirect_to root_path, notice: 'グループを作成しました'
  else
    render :new
  end
end

def edit
  @room = Room.find(params[:id])
end

def update
  Room.update(create_params)
  if Room.update(create_params)
    redirect_to root_path, notice: "グループ情報を編集しました"
  else
    render :edit
  end
end

private

def create_params
  params.require(:room).permit(:name, {:user_ids => []})
end

end
