import React from 'react'

export const SearchScreen = () => {

  return (
    <div>
        <h1>SearchScreen</h1>
        <hr />

        <div className='row'>
            <div className='col-5'>
                <h4>Search Form</h4>
                <hr />

                <form>
                    <input
                        type="text"
                        placeholder='Buscar...'
                        className='form-control'
                        name='searchText'
                        />

                        <button
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            Buscar...
                        </button>
                </form>

            </div>

            <div className='col-7'>
                <h4>Resultados</h4>
                <hr />
            </div>
            
        </div>
    </div>
  )
}
