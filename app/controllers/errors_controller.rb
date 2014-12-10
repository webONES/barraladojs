class ErrorsController < ApplicationController
  before_action :set_error, only: [:show, :edit, :update, :destroy]
  # GET /errors
  # GET /errors.json
  def index
    @errors = Error.all
  end

  # GET /errors/1
  # GET /errors/1.json
  def show
  end

  # GET /errors/new
  def new
    @error = Error.new
  end

  # GET /errors/1/edit
  def edit
  end

  # POST /errors
  # POST /errors.json
  def create
    @error = Error.new(error_params)

    respond_to do |format|
      if @error.save
        format.json { render :show, status: :created, location: @error }
      else
        format.json { render json: @error.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /errors/1
  # PATCH/PUT /errors/1.json
  def update
    respond_to do |format|
      if @error.update(error_params)
        format.json { render :show, status: :ok, location: @error }
      else
        format.json { render json: @error.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /errors/1
  # DELETE /errors/1.json
  def destroy
    @error.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_error
      @error = Error.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def error_params
      params.require(:error).permit(:name)
    end
end
