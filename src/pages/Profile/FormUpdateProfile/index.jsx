import React from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

const FormUpdateProfile = ({ handleSubmitInfo, userInfo }) => {
    const { register, handleSubmit, errors } = useForm()

    return (
        <form
            className="flex flex-col space-y-2 border border-white p-4"
            onSubmit={handleSubmit(handleSubmitInfo)}
        >
            <div className="text-2xl font-semibold">Form update profile</div>
            <label htmlFor="username">
                <div className="w-20 inline-block">username:</div>

                <input
                    name="username"
                    placeholder="username"
                    defaultValue={userInfo?.username}
                    className="rounded-full focus:outline-none p-2 fb-bg-dark-2"
                    ref={register({ required: true })}
                />
            </label>
            <label htmlFor="email">
                <div className="w-20 inline-block">Email:</div>

                <input
                    name="email"
                    placeholder="email"
                    defaultValue={userInfo?.email}
                    className="rounded-full focus:outline-none p-2 fb-bg-dark-2"
                    ref={register({ required: true })}
                />
            </label>
            <label htmlFor="birthday">
                <div className="w-20 inline-block"> Birthday:</div>

                <input
                    name="birthday"
                    defaultValue={userInfo?.birthday}
                    placeholder="birthday"
                    className="rounded-full focus:outline-none p-2 fb-bg-dark-2"
                    ref={register({ required: true })}
                />
            </label>
            {errors.exampleRequired && <span>This field is required</span>}

            <button className="w-20 p-2 fb-bg-main rounded-lg" type="submit">
                Save
            </button>
        </form>
    )
}

FormUpdateProfile.defaultProps = {
    userInfo: {},
    handleSubmitInfo: () => {},
}

FormUpdateProfile.propTypes = {
    userInfo: PropTypes.objectOf(PropTypes.any),
    handleSubmitInfo: PropTypes.func,
}

export default FormUpdateProfile
