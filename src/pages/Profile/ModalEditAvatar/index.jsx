import React from 'react'
import PropTypes from 'prop-types'

const ModalEditAvatar = ({
    handleSubmitAvatar,
    previewAvatar,
    handleChangeAvatar,
    modalRef,
}) => (
    <div className=" fixed z-10 pt-20 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25">
        <div
            ref={modalRef}
            className="relative m-auto p-0 border border-black w-6/12 bg-white text-black"
        >
            <div className="text-center text-lg">Update Profile Picture</div>
            <form onSubmit={handleSubmitAvatar}>
                {previewAvatar ? (
                    <div className="">
                        <img
                            src={previewAvatar}
                            alt="avatarupload"
                            className="object-cover"
                        />
                        <div>
                            <button type="button">Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </div>
                ) : (
                    <div className="">
                        <div className="flex flex-row">
                            <button
                                type="button"
                                className="rounded-lg text-blue flex-grow bg-blue-400"
                            >
                                <label htmlFor="avatar">
                                    <input
                                        id="avatar"
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => handleChangeAvatar(e)}
                                    />
                                    Upload Photo
                                </label>
                            </button>

                            <button
                                type="button"
                                className="rounded-lg text-blue flex-grow bg-gray-400"
                            >
                                Add Frame
                            </button>
                            <button
                                type="button"
                                className="rounded-lg text-blue"
                            >
                                Edit
                            </button>
                        </div>
                        <div className="">
                            <div>Profile Pictures</div>
                            <div>list 6 photos</div>
                        </div>
                        <div className="">
                            <div>Cover Photos</div>
                            <div>list 6 photos</div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    </div>
)

ModalEditAvatar.defaultProps = {
    handleChangeAvatar: () => {},
    handleSubmitAvatar: () => {},
    previewAvatar: '',
    modalRef: '',
}

ModalEditAvatar.propTypes = {
    previewAvatar: PropTypes.node,
    modalRef: PropTypes.node,
    handleChangeAvatar: PropTypes.func,
    handleSubmitAvatar: PropTypes.func,
}

export default ModalEditAvatar
