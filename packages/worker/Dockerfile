# Ref: https://gallery.ecr.aws/lambda/python
FROM public.ecr.aws/lambda/python:3.13

COPY pyproject.toml ${LAMBDA_TASK_ROOT}/

RUN pip install uv && \
    uv pip install --system --no-cache -r <(uv pip compile ${LAMBDA_TASK_ROOT}/pyproject.toml)

# Copy function code
COPY src/atlas_worker ${LAMBDA_TASK_ROOT}/atlas_worker/

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD ["atlas_worker.lambda_handler.lambda_handler"]
