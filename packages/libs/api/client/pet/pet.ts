/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.11
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
} from '.././types';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePet = (pet: Pet, options?: AxiosRequestConfig): Promise<AxiosResponse<Pet>> => {
  return axios.put(`/pet`, pet, options);
};

export const getUpdatePetMutationOptions = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError, { data: Pet }, TContext>;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError, { data: Pet }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof updatePet>>, { data: Pet }> = (props) => {
    const { data } = props ?? {};

    return updatePet(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePetMutationResult = NonNullable<Awaited<ReturnType<typeof updatePet>>>;
export type UpdatePetMutationBody = Pet;
export type UpdatePetMutationError = AxiosError<void>;

/**
 * @summary Update an existing pet
 */
export const useUpdatePet = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePet>>, TError, { data: Pet }, TContext>;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getUpdatePetMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPet = (pet: Pet, options?: AxiosRequestConfig): Promise<AxiosResponse<Pet>> => {
  return axios.post(`/pet`, pet, options);
};

export const getAddPetMutationOptions = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError, { data: Pet }, TContext>;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError, { data: Pet }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof addPet>>, { data: Pet }> = (props) => {
    const { data } = props ?? {};

    return addPet(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AddPetMutationResult = NonNullable<Awaited<ReturnType<typeof addPet>>>;
export type AddPetMutationBody = Pet;
export type AddPetMutationError = AxiosError<void>;

/**
 * @summary Add a new pet to the store
 */
export const useAddPet = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof addPet>>, TError, { data: Pet }, TContext>;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getAddPetMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = (
  params?: FindPetsByStatusParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Pet[]>> => {
  return axios.get(`/pet/findByStatus`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getFindPetsByStatusQueryKey = (params?: FindPetsByStatusParams) => {
  return [`/pet/findByStatus`, ...(params ? [params] : [])] as const;
};

export const getFindPetsByStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof findPetsByStatus>>,
  TError = AxiosError<void>,
>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getFindPetsByStatusQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByStatus>>> = ({ signal }) =>
    findPetsByStatus(params, { signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findPetsByStatus>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type FindPetsByStatusQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByStatus>>>;
export type FindPetsByStatusQueryError = AxiosError<void>;

/**
 * @summary Finds Pets by status
 */
export const useFindPetsByStatus = <TData = Awaited<ReturnType<typeof findPetsByStatus>>, TError = AxiosError<void>>(
  params?: FindPetsByStatusParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof findPetsByStatus>>, TError, TData>;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getFindPetsByStatusQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTags = (
  params?: FindPetsByTagsParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Pet[]>> => {
  return axios.get(`/pet/findByTags`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getFindPetsByTagsQueryKey = (params?: FindPetsByTagsParams) => {
  return [`/pet/findByTags`, ...(params ? [params] : [])] as const;
};

export const getFindPetsByTagsQueryOptions = <
  TData = Awaited<ReturnType<typeof findPetsByTags>>,
  TError = AxiosError<void>,
>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getFindPetsByTagsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof findPetsByTags>>> = ({ signal }) =>
    findPetsByTags(params, { signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof findPetsByTags>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type FindPetsByTagsQueryResult = NonNullable<Awaited<ReturnType<typeof findPetsByTags>>>;
export type FindPetsByTagsQueryError = AxiosError<void>;

/**
 * @summary Finds Pets by tags
 */
export const useFindPetsByTags = <TData = Awaited<ReturnType<typeof findPetsByTags>>, TError = AxiosError<void>>(
  params?: FindPetsByTagsParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof findPetsByTags>>, TError, TData>;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getFindPetsByTagsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = (petId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Pet>> => {
  return axios.get(`/pet/${petId}`, options);
};

export const getGetPetByIdQueryKey = (petId: number) => {
  return [`/pet/${petId}`] as const;
};

export const getGetPetByIdQueryOptions = <TData = Awaited<ReturnType<typeof getPetById>>, TError = AxiosError<void>>(
  petId: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetPetByIdQueryKey(petId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPetById>>> = ({ signal }) =>
    getPetById(petId, { signal, ...axiosOptions });

  return { queryKey, queryFn, enabled: !!petId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPetById>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getPetById>>>;
export type GetPetByIdQueryError = AxiosError<void>;

/**
 * @summary Find pet by ID
 */
export const useGetPetById = <TData = Awaited<ReturnType<typeof getPetById>>, TError = AxiosError<void>>(
  petId: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPetById>>, TError, TData>;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = (
  petId: number,
  params?: UpdatePetWithFormParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.post(`/pet/${petId}`, undefined, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getUpdatePetWithFormMutationOptions = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePetWithForm>>,
    TError,
    { petId: number; params?: UpdatePetWithFormParams },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePetWithForm>>,
  TError,
  { petId: number; params?: UpdatePetWithFormParams },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePetWithForm>>,
    { petId: number; params?: UpdatePetWithFormParams }
  > = (props) => {
    const { petId, params } = props ?? {};

    return updatePetWithForm(petId, params, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePetWithFormMutationResult = NonNullable<Awaited<ReturnType<typeof updatePetWithForm>>>;

export type UpdatePetWithFormMutationError = AxiosError<void>;

/**
 * @summary Updates a pet in the store with form data
 */
export const useUpdatePetWithForm = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePetWithForm>>,
    TError,
    { petId: number; params?: UpdatePetWithFormParams },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getUpdatePetWithFormMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * delete a pet
 * @summary Deletes a pet
 */
export const deletePet = (petId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/pet/${petId}`, options);
};

export const getDeletePetMutationOptions = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError, { petId: number }, TContext>;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError, { petId: number }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deletePet>>, { petId: number }> = (props) => {
    const { petId } = props ?? {};

    return deletePet(petId, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeletePetMutationResult = NonNullable<Awaited<ReturnType<typeof deletePet>>>;

export type DeletePetMutationError = AxiosError<void>;

/**
 * @summary Deletes a pet
 */
export const useDeletePet = <TError = AxiosError<void>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePet>>, TError, { petId: number }, TContext>;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getDeletePetMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary uploads an image
 */
export const uploadFile = (
  petId: number,
  uploadFileBody: Blob,
  params?: UploadFileParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<ApiResponse>> => {
  return axios.post(`/pet/${petId}/uploadImage`, uploadFileBody, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getUploadFileMutationOptions = <TError = AxiosError<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    { petId: number; data: Blob; params?: UploadFileParams },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof uploadFile>>,
  TError,
  { petId: number; data: Blob; params?: UploadFileParams },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadFile>>,
    { petId: number; data: Blob; params?: UploadFileParams }
  > = (props) => {
    const { petId, data, params } = props ?? {};

    return uploadFile(petId, data, params, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof uploadFile>>>;
export type UploadFileMutationBody = Blob;
export type UploadFileMutationError = AxiosError<unknown>;

/**
 * @summary uploads an image
 */
export const useUploadFile = <TError = AxiosError<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFile>>,
    TError,
    { petId: number; data: Blob; params?: UploadFileParams },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getUploadFileMutationOptions(options);

  return useMutation(mutationOptions);
};
